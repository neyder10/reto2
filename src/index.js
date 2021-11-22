require(`dotenv`).config()

//configurar listening del puerto para ver el proyecto en un navegador
const express = require('express')
const port = 3000 || process.env.port

//librerias de sendgrid para envio de correos electronicos
const email = require('./email')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//librerias de twilio para mensajes de texto
const accountSID = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

//const client = require("twilio")(accountSID,authToken)

//para realizar pruebas con postman
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//creacion de la ruta del proyecto
app.get('/',(req,res)=>{
    res.json({message:'Success'})
})
//creación de la ruta en el navegador, se activa el listen()
app.listen(port,()=>{
    console.log(`accede al sitio web dando clic aqui: http://localhost:${port}`)
})
app.post('/api/email/confirmacion',async(req,res,next)=>{
    //Llamamos función que estara en la clase email.js y que requiere de unos
    //parametros que ingresan por Postman
    try{
        res.json(await email.sendOrder(req.body))
    }catch(err){
        next(err)
    }
})
//Validar el código que nos devuelve la ejecución del código, en caso de error
//mostrar todo el contenido del error
app.use((err, req, res, next)=>{
    //180 -> Informativo
    //200 => No es un error, es un status success
    //300 => No esta disponible el recurso
    //400 => No se encuentra URI
    //500 => Error del servidor
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({'message': error.message})
    return
})

function getMessage(){
    const body = 'Mensaje enviado el 19/11/2021 07:01:ee a.m.'
    return{
        to:'antoniotorresalbao@gmail.com',
        from: 'neyderfabiangomez@gmail.com',
        subject: 'Prueba sendgrid G02',
        text: body,
        html: `<!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
        style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title>Nuevo mensaje</title>
        <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <style type="text/css">
            #outlook a {
                padding: 0;
            }
    
            .es-button {
                mso-style-priority: 100 !important;
                text-decoration: none !important;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            .es-desk-hidden {
                display: none;
                float: left;
                overflow: hidden;
                width: 0;
                max-height: 0;
                line-height: 0;
                mso-hide: all;
            }
    
            [data-ogsb] .es-button {
                border-width: 0 !important;
                padding: 10px 30px 10px 30px !important;
            }
    
            [data-ogsb] .es-button.es-button-1 {
                padding: 10px 30px !important;
            }
    
            @media only screen and (max-width:600px) {
    
                p,
                ul li,
                ol li,
                a {
                    line-height: 150% !important
                }
    
                h1,
                h2,
                h3,
                h1 a,
                h2 a,
                h3 a {
                    line-height: 120% !important
                }
    
                h1 {
                    font-size: 36px !important;
                    text-align: left
                }
    
                h2 {
                    font-size: 26px !important;
                    text-align: left
                }
    
                h3 {
                    font-size: 20px !important;
                    text-align: left
                }
    
                .es-header-body h1 a,
                .es-content-body h1 a,
                .es-footer-body h1 a {
                    font-size: 36px !important;
                    text-align: left
                }
    
                .es-header-body h2 a,
                .es-content-body h2 a,
                .es-footer-body h2 a {
                    font-size: 26px !important;
                    text-align: left
                }
    
                .es-header-body h3 a,
                .es-content-body h3 a,
                .es-footer-body h3 a {
                    font-size: 20px !important;
                    text-align: left
                }
    
                .es-menu td a {
                    font-size: 12px !important
                }
    
                .es-header-body p,
                .es-header-body ul li,
                .es-header-body ol li,
                .es-header-body a {
                    font-size: 14px !important
                }
    
                .es-content-body p,
                .es-content-body ul li,
                .es-content-body ol li,
                .es-content-body a {
                    font-size: 14px !important
                }
    
                .es-footer-body p,
                .es-footer-body ul li,
                .es-footer-body ol li,
                .es-footer-body a {
                    font-size: 14px !important
                }
    
                .es-infoblock p,
                .es-infoblock ul li,
                .es-infoblock ol li,
                .es-infoblock a {
                    font-size: 12px !important
                }
    
                *[class="gmail-fix"] {
                    display: none !important
                }
    
                .es-m-txt-c,
                .es-m-txt-c h1,
                .es-m-txt-c h2,
                .es-m-txt-c h3 {
                    text-align: center !important
                }
    
                .es-m-txt-r,
                .es-m-txt-r h1,
                .es-m-txt-r h2,
                .es-m-txt-r h3 {
                    text-align: right !important
                }
    
                .es-m-txt-l,
                .es-m-txt-l h1,
                .es-m-txt-l h2,
                .es-m-txt-l h3 {
                    text-align: left !important
                }
    
                .es-m-txt-r img,
                .es-m-txt-c img,
                .es-m-txt-l img {
                    display: inline !important
                }
    
                .es-button-border {
                    display: inline-block !important
                }
    
                a.es-button,
                button.es-button {
                    font-size: 20px !important;
                    display: inline-block !important
                }
    
                .es-adaptive table,
                .es-left,
                .es-right {
                    width: 100% !important
                }
    
                .es-content table,
                .es-header table,
                .es-footer table,
                .es-content,
                .es-footer,
                .es-header {
                    width: 100% !important;
                    max-width: 600px !important
                }
    
                .es-adapt-td {
                    display: block !important;
                    width: 100% !important
                }
    
                .adapt-img {
                    width: 100% !important;
                    height: auto !important
                }
    
                .es-m-p0 {
                    padding: 0 !important
                }
    
                .es-m-p0r {
                    padding-right: 0 !important
                }
    
                .es-m-p0l {
                    padding-left: 0 !important
                }
    
                .es-m-p0t {
                    padding-top: 0 !important
                }
    
                .es-m-p0b {
                    padding-bottom: 0 !important
                }
    
                .es-m-p20b {
                    padding-bottom: 20px !important
                }
    
                .es-mobile-hidden,
                .es-hidden {
                    display: none !important
                }
    
                tr.es-desk-hidden,
                td.es-desk-hidden,
                table.es-desk-hidden {
                    width: auto !important;
                    overflow: visible !important;
                    float: none !important;
                    max-height: inherit !important;
                    line-height: inherit !important
                }
    
                tr.es-desk-hidden {
                    display: table-row !important
                }
    
                table.es-desk-hidden {
                    display: table !important
                }
    
                td.es-desk-menu-hidden {
                    display: table-cell !important
                }
    
                .es-menu td {
                    width: 1% !important
                }
    
                table.es-table-not-adapt,
                .esd-block-html table {
                    width: auto !important
                }
    
                table.es-social {
                    display: inline-block !important
                }
    
                table.es-social td {
                    display: inline-block !important
                }
    
                .es-m-p5 {
                    padding: 5px !important
                }
    
                .es-m-p5t {
                    padding-top: 5px !important
                }
    
                .es-m-p5b {
                    padding-bottom: 5px !important
                }
    
                .es-m-p5r {
                    padding-right: 5px !important
                }
    
                .es-m-p5l {
                    padding-left: 5px !important
                }
    
                .es-m-p10 {
                    padding: 10px !important
                }
    
                .es-m-p10t {
                    padding-top: 10px !important
                }
    
                .es-m-p10b {
                    padding-bottom: 10px !important
                }
    
                .es-m-p10r {
                    padding-right: 10px !important
                }
    
                .es-m-p10l {
                    padding-left: 10px !important
                }
    
                .es-m-p15 {
                    padding: 15px !important
                }
    
                .es-m-p15t {
                    padding-top: 15px !important
                }
    
                .es-m-p15b {
                    padding-bottom: 15px !important
                }
    
                .es-m-p15r {
                    padding-right: 15px !important
                }
    
                .es-m-p15l {
                    padding-left: 15px !important
                }
    
                .es-m-p20 {
                    padding: 20px !important
                }
    
                .es-m-p20t {
                    padding-top: 20px !important
                }
    
                .es-m-p20r {
                    padding-right: 20px !important
                }
    
                .es-m-p20l {
                    padding-left: 20px !important
                }
    
                .es-m-p25 {
                    padding: 25px !important
                }
    
                .es-m-p25t {
                    padding-top: 25px !important
                }
    
                .es-m-p25b {
                    padding-bottom: 25px !important
                }
    
                .es-m-p25r {
                    padding-right: 25px !important
                }
    
                .es-m-p25l {
                    padding-left: 25px !important
                }
    
                .es-m-p30 {
                    padding: 30px !important
                }
    
                .es-m-p30t {
                    padding-top: 30px !important
                }
    
                .es-m-p30b {
                    padding-bottom: 30px !important
                }
    
                .es-m-p30r {
                    padding-right: 30px !important
                }
    
                .es-m-p30l {
                    padding-left: 30px !important
                }
    
                .es-m-p35 {
                    padding: 35px !important
                }
    
                .es-m-p35t {
                    padding-top: 35px !important
                }
    
                .es-m-p35b {
                    padding-bottom: 35px !important
                }
    
                .es-m-p35r {
                    padding-right: 35px !important
                }
    
                .es-m-p35l {
                    padding-left: 35px !important
                }
    
                .es-m-p40 {
                    padding: 40px !important
                }
    
                .es-m-p40t {
                    padding-top: 40px !important
                }
    
                .es-m-p40b {
                    padding-bottom: 40px !important
                }
    
                .es-m-p40r {
                    padding-right: 40px !important
                }
    
                .es-m-p40l {
                    padding-left: 40px !important
                }
            }
        </style>
    </head>
    
    <body
        style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
        <div class="es-wrapper-color" style="background-color:#FAFAFA">
            <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    <v:fill type="tile" color="#fafafa"></v:fill>
    </v:background>
    <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
                <tr>
                    <td valign="top" style="padding:0;Margin:0">
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                            <tr>
                                <td class="es-info-area" align="center" style="padding:0;Margin:0">
                                    <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                        bgcolor="#FFFFFF">
                                        <tr>
                                            <td align="left" style="padding:20px;Margin:0">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top"
                                                            style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" class="es-infoblock"
                                                                        style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">
                                                                            <a target="_blank" href=""
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">View
                                                                                online version</a></p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-header" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0"
                                        cellspacing="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                        <tr>
                                            <td align="left"
                                                style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td class="es-m-p0r" valign="top" align="center"
                                                            style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:20px;font-size:0px">
                                                                        <img src="https://uiqywy.stripocdn.email/content/guids/CABINET_887f48b6a2f22ad4fb67bc2a58c0956b/images/93351617889024778.png"
                                                                            alt="Logo"
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;font-size:12px"
                                                                            width="200" title="Logo"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding:0;Margin:0">
                                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                                            class="es-menu" role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr class="links">
                                                                                <td align="center" valign="top" width="20%"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0"
                                                                                    bgcolor="transparent"><a target="_blank"
                                                                                        href=""
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">Tienda</a>
                                                                                </td>
                                                                                <td align="center" valign="top" width="20%"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0">
                                                                                    <a target="_blank" href=""
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">Nuevo</a>
                                                                                </td>
                                                                                <td align="center" valign="top" width="20%"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0">
                                                                                    <a target="_blank" href=""
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">Venta</a>
                                                                                </td>
                                                                                <td align="center" valign="top" width="20%"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0">
                                                                                    <a target="_blank" href=""
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">Sobre</a>
                                                                                </td>
                                                                                <td align="center" valign="top" width="20%"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:15px;border:0">
                                                                                    <a target="_blank" href=""
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#666666;font-size:14px">Categorías</a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                        cellspacing="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                        <tr>
                                            <td align="left"
                                                style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top"
                                                            style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px">
                                                                        <img class="adapt-img"
                                                                            src="https://wwwhatsnew.com/wp-content/uploads/2019/09/captura260.jpg"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="415"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" class="es-m-txt-c"
                                                                        style="padding:0;Margin:0;padding-bottom:5px;padding-top:20px">
                                                                        <h1
                                                                            style="Margin:0;line-height:55px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#333333">
                                                                            DevSoftware</h1>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" class="es-m-txt-c"
                                                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                                        <h3
                                                                            style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">
                                                                            Venta <strong>Grande</strong><br><a
                                                                                target="_blank"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#5C68E2;font-size:20px"
                                                                                href="">20k&nbsp;</a>hasta&nbsp;<a
                                                                                target="_blank"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#5C68E2;font-size:20px"
                                                                                href="">50k</a></h3>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                            ¿Quieres tener los mejores atuendos en el dia de
                                                                            Halloween? Entonces te gustará nuestra
                                                                            colección. ¡¡ADVERTENCIA!! 50% de descuento en
                                                                            todo el sitio.</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top"
                                                            style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:10px"><span
                                                                            class="es-button-border"
                                                                            style="border-style:solid;border-color:#5c68e2;background:#5c68e2;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a
                                                                                href="" class="es-button es-button-1"
                                                                                target="_blank"
                                                                                style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;border-style:solid;border-color:#5C68E2;border-width:10px 30px;display:inline-block;background:#5C68E2;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center">COMPRA
                                                                                AHORA</a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top"
                                                            style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" style="padding:0;Margin:0">
                                                                        <h2
                                                                            style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">
                                                                            Compra por categoría</h2>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="esdev-adapt-off" align="left"
                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="left" style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                bgcolor="#FAFAFA"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#fafafa;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px">
                                                                        <a target="_blank"
                                                                            href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disfracesjarana.com%2Fgrupo-disfraces-diablos-del-infierno.html&psig=AOvVaw25DGk0krnjY8tGXxDYPc60&ust=1637465695484000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjhj-CBpvQCFQAAAAAdAAAAABAk"
                                                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px"><img
                                                                                class="adapt-img"
                                                                                src="https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/g/r/grupo-diablos-del-infierno_1.jpg"
                                                                                alt
                                                                                style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                height="290"></a></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                        cellspacing="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:240px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td class="es-m-p0r" align="center"
                                                            style="padding:0;Margin:0;width:240px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0px"><img
                                                                            src="https://i.pinimg.com/originals/2b/64/6a/2b646a1a537d5628ea228a0cb2702719.jpg"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="230"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td><td style="width:20px"></td><td style="width:300px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                    <tr>
                                                        <td align="center" style="padding:0;Margin:0;width:300px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center" class="es-m-txt-c"
                                                                        style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:10px;padding-right:10px">
                                                                        <h3
                                                                            style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">
                                                                            Payaso&nbsp;It´s<br></h3>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">
                                                                            Esta traje pertenece al payaso Pennywise. Es un
                                                                            personaje ficticio creado por el escritor
                                                                            Stephen King para su novela de terror It.</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                        <h2
                                                                            style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">
                                                                            $36k&nbsp;&nbsp;<span style="color:#999999"><s
                                                                                    style="text-decoration:line-through">$60k</s></span>
                                                                        </h2>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">
                                                                            <strong><a target="_blank"
                                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#5C68E2;font-size:16px"
                                                                                    href="">AHORRA $24k</a></strong></p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:20px"><span
                                                                            class="es-button-border"
                                                                            style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a
                                                                                href="" class="es-button es-button-1"
                                                                                target="_blank"
                                                                                style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;border-style:solid;border-color:#ffffff;border-width:10px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center">AGREGA
                                                                                AL CARRO</a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:560px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:300px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                    <tr>
                                                        <td class="es-m-p0r" align="center"
                                                            style="padding:0;Margin:0;width:240px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0px"><img
                                                                            src="https://static1.dresoop.es/data_productos/dresoop/productos/3/7/1/9/3719_01_01.jpg"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="230"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td><td dir="ltr" style="width:20px"></td><td dir="ltr" style="width:240px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td align="center" style="padding:0;Margin:0;width:300px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid transparent;border-top:1px solid transparent;border-bottom:1px solid transparent;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center" class="es-m-txt-c"
                                                                        style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:10px;padding-right:10px">
                                                                        <h3
                                                                            style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">
                                                                            Calabazin</h3>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">
                                                                            Este traje hace referencia a la calabaza e
                                                                            incluye un muñeco.</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                        <h2
                                                                            style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">
                                                                            $15k&nbsp;&nbsp;<span style="color:#999999"><s
                                                                                    style="text-decoration:line-through">$25k</s></span>
                                                                        </h2>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">
                                                                            <strong><a target="_blank"
                                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#5C68E2;font-size:16px"
                                                                                    href="">AHORRA $10k</a></strong></p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:20px"><span
                                                                            class="es-button-border"
                                                                            style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a
                                                                                href="" class="es-button es-button-1"
                                                                                target="_blank"
                                                                                style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;border-style:solid;border-color:#ffffff;border-width:10px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center">AGREGA
                                                                                AL CARRO</a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td></tr></table></table><![endif]-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:240px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td class="es-m-p0r" align="center"
                                                            style="padding:0;Margin:0;width:240px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0px"><img
                                                                            src="https://sc04.alicdn.com/kf/HTB1gXAyXfLsK1Rjy0Fbq6xSEXXau.jpg"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="230"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td><td style="width:20px"></td><td style="width:300px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                    <tr>
                                                        <td align="center" style="padding:0;Margin:0;width:300px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center" class="es-m-txt-c"
                                                                        style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:10px;padding-right:10px">
                                                                        <h3
                                                                            style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">
                                                                            Pirata</h3>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">
                                                                            Este traje hace referencia a las piratas,
                                                                            incluye un arma falsa.</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                        <h2
                                                                            style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">
                                                                            $24k&nbsp;&nbsp;<span style="color:#999999"><s
                                                                                    style="text-decoration:line-through">$40k</s></span>
                                                                        </h2>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">
                                                                            <strong><a target="_blank"
                                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#5C68E2;font-size:16px"
                                                                                    href="">AHORRA $16k</a></strong></p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:20px"><span
                                                                            class="es-button-border"
                                                                            style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a
                                                                                href="" class="es-button es-button-1"
                                                                                target="_blank"
                                                                                style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;border-style:solid;border-color:#ffffff;border-width:10px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center">AGREGA
                                                                                AL CARRO</a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:560px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:300px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                    <tr>
                                                        <td class="es-m-p0r" align="center"
                                                            style="padding:0;Margin:0;width:240px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0px"><img
                                                                            src="https://disfrazarteshop.es/12000-large_default/disfraz-mago-para-nino.jpg"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="230"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td><td dir="ltr" style="width:20px"></td><td dir="ltr" style="width:240px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td align="center" style="padding:0;Margin:0;width:300px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-left:1px solid transparent;border-top:1px solid transparent;border-bottom:1px solid transparent;border-radius:5px"
                                                                role="presentation">
                                                                <tr>
                                                                    <td align="center" class="es-m-txt-c"
                                                                        style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:10px;padding-right:10px">
                                                                        <h3
                                                                            style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">
                                                                            &nbsp;Mago</h3>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">
                                                                            Este traje hace referencia a un mago
                                                                            e&nbsp;incluye una varita magica.</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                        <h2
                                                                            style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">
                                                                            $9k&nbsp;&nbsp;<span style="color:#999999"><s
                                                                                    style="text-decoration:line-through">$15k</s></span>
                                                                        </h2>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px">
                                                                            <strong><a target="_blank"
                                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#5C68E2;font-size:16px"
                                                                                    href="">AHORRA $6k</a></strong></p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:20px"><span
                                                                            class="es-button-border"
                                                                            style="border-style:solid;border-color:#5c68e2;background:#ffffff;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a
                                                                                href="" class="es-button es-button-1"
                                                                                target="_blank"
                                                                                style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#5c68e2;font-size:20px;border-style:solid;border-color:#ffffff;border-width:10px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center">AGREGA
                                                                                AL CARRO</a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td></tr></table></table><![endif]-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-bottom:30px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top"
                                                            style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px">
                                                                        <span class="es-button-border"
                                                                            style="border-style:solid;border-color:#5c68e2;background:#5c68e2;border-width:2px;display:inline-block;border-radius:5px;width:auto"><a
                                                                                href="" class="es-button es-button-1"
                                                                                target="_blank"
                                                                                style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;border-style:solid;border-color:#5C68E2;border-width:10px 30px;display:inline-block;background:#5C68E2;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center">COMPRA
                                                                                AHORA</a></span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top"
                                                            style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" class="es-m-txt-c"
                                                                        style="padding:0;Margin:0">
                                                                        <h3
                                                                            style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">
                                                                            ENTREGA SIN CONTACTO</h3>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="padding:20px;Margin:0">
                                                <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:143px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td class="es-m-p0r es-m-p20b" align="center"
                                                            style="padding:0;Margin:0;width:133px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;font-size:0px"><img
                                                                            src="https://uiqywy.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/17971617974647919.png"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="45"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                            ENVÍO <br>GRATIS</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="es-hidden" style="padding:0;Margin:0;width:10px"></td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td><td style="width:143px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td class="es-m-p20b" align="center"
                                                            style="padding:0;Margin:0;width:133px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;font-size:0px"><img
                                                                            src="https://uiqywy.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/80801617974647921.png"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="45"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                            FÁCIL <br>PAGO</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="es-hidden" style="padding:0;Margin:0;width:10px"></td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td><td style="width:132px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                    <tr>
                                                        <td align="center" class="es-m-p20b"
                                                            style="padding:0;Margin:0;width:132px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;font-size:0px"><img
                                                                            src="https://uiqywy.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/77861617974647919.png"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="45"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                            DEVOLUCIÓN RÁPIDA</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td><td style="width:10px"></td><td style="width:132px" valign="top"><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                    <tr>
                                                        <td align="center" style="padding:0;Margin:0;width:132px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;font-size:0px"><img
                                                                            src="https://uiqywy.stripocdn.email/content/guids/CABINET_1154ef987a3f887ce59a7fdb008c50d6/images/59831617975283573.png"
                                                                            alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="45"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                            CALIDAD&nbsp;<br>SEGURA<br></p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                            <tr>
                                <td align="center" style="padding:0;Margin:0">
                                    <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px">
                                        <tr>
                                            <td align="left"
                                                style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="left" style="padding:0;Margin:0;width:600px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            class="es-table-not-adapt es-social"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr>
                                                                                <td align="center" valign="top"
                                                                                    style="padding:0;Margin:0;padding-right:40px">
                                                                                    <img title="Facebook"
                                                                                        src="https://uiqywy.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                                                                        alt="Fb" width="32"
                                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                                </td>
                                                                                <td align="center" valign="top"
                                                                                    style="padding:0;Margin:0;padding-right:40px">
                                                                                    <img title="Twitter"
                                                                                        src="https://uiqywy.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png"
                                                                                        alt="Tw" width="32"
                                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                                </td>
                                                                                <td align="center" valign="top"
                                                                                    style="padding:0;Margin:0;padding-right:40px">
                                                                                    <img title="Instagram"
                                                                                        src="https://uiqywy.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
                                                                                        alt="Inst" width="32"
                                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                                </td>
                                                                                <td align="center" valign="top"
                                                                                    style="padding:0;Margin:0"><img
                                                                                        title="Youtube"
                                                                                        src="https://uiqywy.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png"
                                                                                        alt="Yt" width="32"
                                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="padding:0;Margin:0;padding-bottom:35px">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">
                                                                            Style Casual&nbsp;© 2021 Style Casual, Inc. All
                                                                            Rights Reserved.</p>
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">
                                                                            4562 Hazy Panda Limits, Chair Crossing,
                                                                            Kentucky, US, 607898</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding:0;Margin:0">
                                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                                            class="es-menu" role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr class="links">
                                                                                <td align="center" valign="top"
                                                                                    width="33.33%"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0">
                                                                                    <a target="_blank" href=""
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Visit
                                                                                        Us </a></td>
                                                                                <td align="center" valign="top"
                                                                                    width="33.33%"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0;border-left:1px solid #cccccc">
                                                                                    <a target="_blank" href=""
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Privacy
                                                                                        Policy</a></td>
                                                                                <td align="center" valign="top"
                                                                                    width="33.33%"
                                                                                    style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0;border-left:1px solid #cccccc">
                                                                                    <a target="_blank" href=""
                                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Terms
                                                                                        of Use</a></td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                            <tr>
                                <td class="es-info-area" align="center" style="padding:0;Margin:0">
                                    <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                        bgcolor="#FFFFFF">
                                        <tr>
                                            <td align="left" style="padding:20px;Margin:0">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="center" valign="top"
                                                            style="padding:0;Margin:0;width:560px">
                                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" class="es-infoblock"
                                                                        style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                        <p
                                                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">
                                                                            <a target="_blank" href=""
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a>No
                                                                            longer want to receive these emails?&nbsp;<a
                                                                                href="" target="_blank"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">Unsubscribe</a>.<a
                                                                                target="_blank" href=""
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a>
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
    
    </html>`
    }
}
async function sendEmail(){
    try{
        await sgMail.send(getMessage())
        console.log('Correo ha sido enviado')
    }catch(err){
        console.error('No se pudo enviar el mensaje')
        console.error(err)
        if(err.response) console.error(err.response.body)
    }
}
(async()=>{
    console.log('Enviando correo electrónico')
    await sendEmail()
})
// // Enviar mensaje a whatsAp
// client.messages.create({
//     body: "Bienvenidos a la semana IV del ciclo final Misión TIC.",
//     from: '+15302852176',
//     to: '+573165203818'
// }).then(message => console.log(`Mensaje enviado ${message.sid}`))

// client.messages.create({
//     body: "Bienvenidos a la semana IV del ciclo final Misión TIC",
//    // Celular del sandbox de whatsapp
//     from: 'whatsapp:+15302852176',
//     to: 'whatsapp:+573165203818'
// }).then(message => console.log(`Mensaje enviado ${message.sid}`))
// // Enviar mensaje de texto