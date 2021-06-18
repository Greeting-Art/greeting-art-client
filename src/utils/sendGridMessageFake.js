function sendMsg(formData, artId) {
    return {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'to': `${formData.email}`,
            'from': 'GreetingArt@outlook.com',
            'subject': `${formData.senderName} has send you a Greeting Art`,
            'html': `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
              <!--[if !mso]><!-->
              <meta http-equiv="X-UA-Compatible" content="IE=Edge">
              <!--<![endif]-->
              <!--[if (gte mso 9)|(IE)]>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:AllowPNG/>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
              <!--[if (gte mso 9)|(IE)]>
          <style type="text/css">
            body {width: 600px;margin: 0 auto;}
            table {border-collapse: collapse;}
            table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
            img {-ms-interpolation-mode: bicubic;}
          </style>
        <![endif]-->
              <style type="text/css">
            body, p, div {
              font-family: arial,helvetica,sans-serif;
              font-size: 14px;
            }
            body {
              color: #000000;
            }
            body a {
              color: #42ee99;
              text-decoration: none;
            }
            p { margin: 0; padding: 0; }
            table.wrapper {
              width:100% !important;
              table-layout: fixed;
              -webkit-font-smoothing: antialiased;
              -webkit-text-size-adjust: 100%;
              -moz-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            img.max-width {
              max-width: 100% !important;
            }
            .column.of-2 {
              width: 50%;
            }
            .column.of-3 {
              width: 33.333%;
            }
            .column.of-4 {
              width: 25%;
            }
            ul ul ul ul  {
              list-style-type: disc !important;
            }
            ol ol {
              list-style-type: lower-roman !important;
            }
            ol ol ol {
              list-style-type: lower-latin !important;
            }
            ol ol ol ol {
              list-style-type: decimal !important;
            }
            @media screen and (max-width:480px) {
              .preheader .rightColumnContent,
              .footer .rightColumnContent {
                text-align: left !important;
              }
              .preheader .rightColumnContent div,
              .preheader .rightColumnContent span,
              .footer .rightColumnContent div,
              .footer .rightColumnContent span {
                text-align: left !important;
              }
              .preheader .rightColumnContent,
              .preheader .leftColumnContent {
                font-size: 80% !important;
                padding: 5px 0;
              }
              table.wrapper-mobile {
                width: 100% !important;
                table-layout: fixed;
              }
              img.max-width {
                height: auto !important;
                max-width: 100% !important;
              }
              a.bulletproof-button {
                display: block !important;
                width: auto !important;
                font-size: 80%;
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .columns {
                width: 100% !important;
              }
              .column {
                display: block !important;
                width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
              .social-icon-column {
                display: inline-block !important;
              }
            }
          </style>
              <!--user entered Head Start-->
        
             <!--End Head user entered-->
            </head>
            <body>
              <center class="wrapper" data-link-color="#42ee99" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#000000;">
                <div class="webkit">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#000000">
                    <tr>
                      <td valign="top" bgcolor="#000000" width="100%">
                        <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td width="100%">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td>
                                    <!--[if mso]>
            <center>
            <table><tr><td width="600">
          <![endif]-->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                              <tr>
                                                <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
            <tr>
              <td role="module-content">
              </td>
            </tr>
          </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="vB9TDziyvx65CC2nx3oyRH">
              <tbody><tr>
                <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="#000000">
                </td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9c6b060b-bce8-45e0-bd65-ff3e0047b94d" data-mc-module-version="2019-10-22">
            <tbody>
            </tbody>
          </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="uXsDxMnn1bRMmDcX8NB6rW">
              <tbody><tr>
                <td style="font-size:6px; line-height:10px; padding:30px 0px 30px 0px;" bgcolor="#000000" valign="top" align="center"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:50% !important; width:50%; height:auto !important;" src="https://github.com/Greeting-Art/greeting-art-client/blob/dev/src/assets/3D13-greeting-art-transparent.png?raw=true" alt="SongRiddle" width="300" data-responsive="true" data-proportionally-constrained="false"></td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="hL6wjQ2qknNd5qDwT1p7Up" data-mc-module-version="2019-10-22">
              <tbody><tr>
            </tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="37c1DUYE1TN31PTwSNoaE7">
              <tbody>
            </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="qk51Jjn4bm3rn2Yb31Dxzb" data-mc-module-version="2019-10-22">
              <tbody><tr>
                <td style="background-color:#ffffff; padding:50px 50px 10px 50px; line-height:22px; text-align:center;" height="100%" valign="top" bgcolor="#ffffff"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 24px; font-family: verdana, geneva, sans-serif"><strong>You just recieved an Ecard from Greeting Art!.</strong></span></div><div></div></div></td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="iTBXe9c6QUCujvmJs8hYKr" data-mc-module-version="2019-10-22">
              <tbody><tr>
                <td style="background-color:#ffffff; padding:40px 40px 40px 40px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="#ffffff"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px; font-family: verdana, geneva, sans-serif">${formData.senderName} must love you! Or at least like you enough to send you a greenting card.</span></div>
        <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
        <div></div></div></td>
              </tr><tr>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px; background-color:#000000;" valign="top" align="center"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" src="${artId}" alt="" width="600" data-responsive="true" data-proportionally-constrained="false"></td>
              </tr>
              <tr>
                <td style="background-color:#ffffff; padding:40px 40px 40px 40px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="#ffffff"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 16px; font-family: verdana, geneva, sans-serif">${formData.message}</span></div>
        <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
        <div></div></div></td>
              </tr>
            </tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-muid="qY8ouFUf6bFVP8tHkQ5gq7"><tbody><tr><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:20px 20px 60px 20px; background-color:#ffffff;"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#5471CF" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a style="background-color:#5471CF; border:0px solid #08b65d; border-color:#08b65d; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-family:verdana,geneva,sans-serif; font-size:16px; font-weight:normal; letter-spacing:3px; line-height:30px; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid;" href="https://greeting-art.netlify.app/" target="_blank">Make Your Own Greeting Card</a></td></tr></tbody></table></td></tr></tbody></table>
            <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="2ga5f7koD5ApvUfnqUK6aT">
              <tbody><tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#000000">
                </td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c3nRrjMndqXf1snYDFPSF9">
              <tbody><tr>
                <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="#000000">
                  <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="3px" style="line-height:3px; font-size:3px;">
                    <tbody><tr>
                      <td style="padding:0px 0px 3px 0px;" bgcolor="#5471CF"></td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="pa9PeYjCEFyByuP5878Sd2">
              <tbody><tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#000000">
                </td>
              </tr>
            </tbody></table>
                </td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="vHVg85Rtcz7gagZZquA4Bw">
              <tbody><tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#000000">
                </td>
              </tr>
            </tbody></table><div data-role="module-unsubscribe" class="module unsubscribe-css__unsubscribe___2CDlR" role="module" data-type="unsubscribe" style="background-color:#000000; color:#ffffff; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:center;" data-muid="vqq9VGfbTmLsFG2U3YC8Fh"><p style="font-family:verdana,geneva,sans-serif; font-size:12px; line-height:20px;"><a class="aboutUs--aboutUsLink" href="https://greeting-art.netlify.app/aboutus" style="color:#5471CF;">About Us</a></p></div><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="vKe4rfbECMPFgNz27Wg5EW">
              <tbody><tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#000000">
                </td>
              </tr>
            </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="35xFa9abxGTBYt9yR9BeQ2">
              <tbody><tr>
                <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#000000">
                </td>
              </tr>
            </tbody></table></td>
                                              </tr>
                                            </table>
                                            <!--[if mso]>
                                          </td>
                                        </tr>
                                      </table>
                                    </center>
                                    <![endif]-->
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
              </center>
            </body>
          </html>`
        })
    }
}

export { sendMsg };
