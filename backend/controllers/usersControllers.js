const User = require('../models/users.js')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')        
const nodemailer = require('nodemailer') 
const jwt = require('jsonwebtoken')

const sendEmail = async (email, uniqueString) => { 

    const transporter = nodemailer.createTransport({ 
        host: 'smtp.gmail.com',         
        port: 465,
        secure: true,
        auth: {
            user: "useremailverifyMindHub@gmail.com",    
            pass: "mindhub2021"                        
        }                                            
    })

    // EN ESTA SECCION LOS PARAMETROS DEL MAIL 
    let sender = "useremailverifyMindHub@gmail.com"  
    let mailOptions = { 
        from: sender,   
        to: email,       
        subject: "Verificacion de email usuario ", 
        html: `
        <div >
        <h1 style="color:red">Presiona <a href=http://localhost:4000/api/verify/${uniqueString}>aqui</a> para confirma tu email. Gracias </h1>
        </div>
        `
    
    };
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) { console.log(error) }
        else {
            console.log("Mensaje enviado")

        }
    })
};




const usersControllers = {

    verifyEmail: async (req, res) => {

        const { uniqueString } = req.params;

        const user = await User.findOne({ uniqueString: uniqueString })

        if (user) {
            user.emailVerificado = true 
            await user.save()
            res.redirect("http://localhost:3000/") 
        }
        else { res.json({ success: false, response: "Su email no se ha verificado" }) }
    },


    signUpUsers: async (req,res)=>{
        let {fullName, email, password, from, pais } = req.body.userData
        const test = req.body.test

        try {
    
            const usuarioExiste = await User.findOne({ email }) 

            if (usuarioExiste) {
                if (usuarioExiste.from.indexOf(from) !== -1) {
                    res.json({ success: false,
                               from:"signup", 
                               message: "Ya has realizado tu SignUp de esta forma por favor realiza SignIn" })
                } else {
                    const contraseñaHasheada = bcryptjs.hashSync(password, 10)
                     
                    usuarioExiste.from.push(from)
                    usuarioExiste.password.push(contraseñaHasheada) 
                    if(from === "form-Signup"){ 
                        usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await usuarioExiste.save()
                        await sendEmail(email, usuarioExiste.uniqueString)

                    res.json({
                        success: true, 
                        from:"signup", 
                        message: "Te enviamos un email para validarlo, por favor verifica tu casill para completar el signUp y agregarlo a tus metodos de SignIN "
                    }) 
                    
                    } else{
                    
                    usuarioExiste.save()
                    
                    res.json({ success: true,
                               from:"signup", 
                               message: "Agregamos "+from+ " a tus medios para realizar signIn" })
                }
            }
            } else {
                const contraseñaHasheada = bcryptjs.hashSync(password, 10)
            
                const nuevoUsuario = await new User({
                    fullName,
                    email,
                    password:[contraseñaHasheada],
                    uniqueString:crypto.randomBytes(15).toString('hex'),
                    emailVerificado:false,
                    from:[from],
                    pais,
                
                })
              
                if (from !== "form-Signup") { 
                    await nuevoUsuario.save()

                    res.json({
                        success: true, 
                        from:"signup",
                        message: "Felicitaciones se ha creado tu usuario con " +from
                    })
    
                } else {
                    await nuevoUsuario.save()
                    await sendEmail(email, nuevoUsuario.uniqueString) 
    
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp "
                    })
                } 
            }
        } catch (error) {
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" }) 
        }
    },
    signInUser: async (req, res) => {

        const { email, password,  from } = req.body.logedUser

        try {
            const usuarioExiste = await User.findOne({ email })
            const indexpass = usuarioExiste.from.indexOf(from)

            if (!usuarioExiste) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({ success: false, message: "Tu usuario no ha sido registrado realiza signUp" })

            } else {
                if (from !== "form-Signup") { 
                    
                    let contraseñaCoincide =  usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
                    
                    if (contraseñaCoincide.length >0) { 
                       
                        const userData = {
                                        id:usuarioExiste._id,
                                        fullName: usuarioExiste.fullName,
                                        email: usuarioExiste.email,
                                        from:from
                                        }

                        await usuarioExiste.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn:  60* 60*24 })
                        

                        res.json({ success: true,  
                                   from:from,
                                   response: {token,userData }, 
                                   message:"Bienvenido nuevamente "+ userData.fullName,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"No has realizado el registro con "+from+"si quieres ingresar con este metodo debes hacer el signUp con " +from
                          })
                    }
                } else { 
                    if(usuarioExiste.emailVerificado){
                        
                        let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))

                        if(contraseñaCoincide.length >0){
                            
                        const userData = {
                            id: usuarioExiste._id,
                            fullName: usuarioExiste.fullName, 
                            email: usuarioExiste.email,
                            from:from
                            }

                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn:  60* 60*24 })
                        res.json({ success: true, 
                            from: from, 
                            response: {token, userData }, 
                            message:"Bienvenido nuevamente "+userData.fullName,
                          })
                        } else{
                            res.json({ success: false, 
                                from: from,  
                                message:"El usuario o el password no coinciden",
                              })
                        }
                    } else{
                        res.json({ success: false, 
                            from: from, 
                            message:"No has verificado tu email, por favor verifica ti casilla de emails para completar tu signUp"
                          }) 
                    }

                } 
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }
    },

    signOutUser: async (req, res) => {
       
        const email = req.body.closeuser
        const user = await User.findOne({ email })
        await user.save()
    },

    verificarToken:(req, res) => {
        if(!req.err){
        res.json({success:true,
                  response:{id:req.user.id, fullName:req.user.fullName,email:req.user.email, from:"token"},
                  message:"Bienvenido nuevamente "+req.user.fullName}) 
        }else{
            res.json({success:false,
            message:"Por favor realiza nuevamente signIn"}) 
        }
    }

}
module.exports = usersControllers
