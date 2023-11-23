import { appDeploy } from '@/common/consts/app-deploy.ts'
import { ROUTES } from '@/common/consts/routes.ts'

export const emailRecoveringTemplate = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="und">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Новый шаблон 2023-11-19</title><!--[if (mso 16)]>
  <style type="text/css">
    a {
      text-decoration: none;
    }
  </style>
  <![endif]--><!--[if gte mso 9]>
  <style>sup {
    font-size: 100% !important;
  }</style><![endif]--><!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
  <style type="text/css">
      .rollover:hover .rollover-first {
          max-height: 0px !important;
          display: none !important;
      }

      .rollover:hover .rollover-second {
          max-height: none !important;
          display: inline-block !important;
      }

      .rollover div {
          font-size: 0px;
      }

      u + .body img ~ div div {
          display: none;
      }

      #outlook a {
          padding: 0;
      }

      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
          color: inherit;
          mso-style-priority: 99;
      }

      a.es-button {
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

      .es-button-border:hover > a.es-button {
          color: #ffffff !important;
      }

      @media only screen and (max-width: 600px) {
          *[class="gmail-fix"] {
              display: none !important
          }

          p, a {
              line-height: 150% !important
          }

          h1, h1 a {
              line-height: 120% !important
          }

          h2, h2 a {
              line-height: 120% !important
          }

          h3, h3 a {
              line-height: 120% !important
          }

          h4, h4 a {
              line-height: 120% !important
          }

          h5, h5 a {
              line-height: 120% !important
          }

          h6, h6 a {
              line-height: 120% !important
          }

          h1 {
              font-size: 30px !important;
              text-align: center
          }

          h2 {
              font-size: 26px !important;
              text-align: center
          }

          h3 {
              font-size: 20px !important;
              text-align: center
          }

          h4 {
              font-size: 24px !important;
              text-align: left
          }

          h5 {
              font-size: 20px !important;
              text-align: left
          }

          h6 {
              font-size: 16px !important;
              text-align: left
          }

          .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a {
              font-size: 30px !important
          }

          .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a {
              font-size: 26px !important
          }

          .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a {
              font-size: 20px !important
          }

          .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a {
              font-size: 24px !important
          }

          .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a {
              font-size: 20px !important
          }

          .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a {
              font-size: 16px !important
          }

          .es-menu td a {
              font-size: 16px !important
          }

          .es-header-body p, .es-header-body a {
              font-size: 16px !important
          }

          .es-content-body p, .es-content-body a {
              font-size: 16px !important
          }

          .es-footer-body p, .es-footer-body a {
              font-size: 16px !important
          }

          .es-infoblock p, .es-infoblock a {
              font-size: 12px !important
          }

          .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 {
              text-align: center !important
          }

          .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 {
              text-align: right !important
          }

          .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 {
              text-align: justify !important
          }

          .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 {
              text-align: left !important
          }

          .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img {
              display: inline !important
          }

          .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second {
              display: inline !important
          }

          .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div {
              line-height: 0 !important;
              font-size: 0 !important
          }

          .es-spacer {
              display: inline-table
          }

          a.es-button, button.es-button {
              font-size: 20px !important;
              line-height: 120% !important
          }

          a.es-button, button.es-button, .es-button-border {
              display: block !important
          }

          .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button {
              display: block !important
          }

          .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu {
              display: inline-block !important
          }

          .es-adaptive table, .es-left, .es-right {
              width: 100% !important
          }

          .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header {
              width: 100% !important;
              max-width: 600px !important
          }

          .adapt-img {
              width: 100% !important;
              height: auto !important
          }

          .es-mobile-hidden, .es-hidden {
              display: none !important
          }

          .es-desk-hidden {
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

          table.es-table-not-adapt, .esd-block-html table {
              width: auto !important
          }

          .es-social td {
              padding-bottom: 10px
          }

          .h-auto {
              height: auto !important
          }
      }
  </style>
</head>
<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
<div dir="ltr" class="es-wrapper-color" lang="und" style="background-color:#F4F4F4; padding-bottom: 100px"><!--[if gte mso 9]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    <v:fill type="tile" color="#f4f4f4"></v:fill>
  </v:background>
  <![endif]-->
  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F4F4F4">
    <tr class="gmail-fix" height="0">
      <td style="padding:0;Margin:0">
        <table cellspacing="0" cellpadding="0" border="0" align="center"
               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px">
          <tr>
            <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px"
                height="0"><img
              src="https://eblzyfl.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png"
              style="display:block;font-size:18px;border:0;outline:none;text-decoration:none;max-height:0px;min-height:0px;min-width:600px;width:600px"
              alt="" width="600" height="1"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td valign="top" style="padding:0;Margin:0">
        <table class="es-header" cellspacing="0" cellpadding="0" align="center"
               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:#7C72DC;background-repeat:repeat;background-position:center top">
          <tr>
            <td style="padding:0;Margin:0;background-color:#7c72dc" bgcolor="#7c72dc" align="center">
              <table class="es-header-body" cellspacing="0" cellpadding="0" align="center"
                     style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#7C72DC;width:600px">
                <tr>
                  <td align="left"
                      style="Margin:0;padding-top:20px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                    <table width="100%" cellspacing="0" cellpadding="0"
                           style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                        <td valign="top" align="center" style="padding:0;Margin:0;width:580px">
                          <table width="100%" cellspacing="0" cellpadding="0"
                                 style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                            <tr>
                              <td align="center"
                                  style="Margin:0;padding-right:10px;padding-left:10px;padding-top:25px;padding-bottom:25px;font-size:0px">
                                <img
                                  src="https://eblzyfl.stripocdn.email/content/guids/CABINET_d16ad340a4e02f6f2bd727ea1c9a00393184673ff05a401b551d56cd4fe2a909/images/logo.png"
                                  alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"
                                  height="84"></td>
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
        <table class="es-content" cellspacing="0" cellpadding="0" align="center"
               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
          <tr>
            <td style="padding:0;Margin:0;background-color:#7c72dc" bgcolor="#7c72dc" align="center">
              <table class="es-content-body"
                     style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                     cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td align="left" style="padding:0;Margin:0">
                    <table width="100%" cellspacing="0" cellpadding="0"
                           style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                        <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                          <table
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px"
                            width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                            <tr>
                              <td align="center"
                                  style="Margin:0;padding-top:35px;padding-right:30px;padding-bottom:5px;padding-left:30px">
                                <h1
                                  style="Margin:0;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:48px;font-style:normal;font-weight:normal;line-height:58px;color:#111111">
                                  Password Recovering</h1></td>
                            </tr>
                            <tr>
                              <td bgcolor="#ffffff" align="center"
                                  style="Margin:0;padding-bottom:5px;padding-top:5px;padding-right:20px;padding-left:20px;font-size:0">
                                <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"
                                       style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                  <tr>
                                    <td
                                      style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td>
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
        <table class="es-content" cellspacing="0" cellpadding="0" align="center"
               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
          <tr>
            <td align="center" style="padding:0;Margin:0">
              <table class="es-content-body"
                     style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px"
                     cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                <tr>
                  <td align="left" style="padding:0;Margin:0">
                    <table width="100%" cellspacing="0" cellpadding="0"
                           style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                        <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                          <table
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff"
                            width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                            <tr>
                              <td class="es-m-txt-l" bgcolor="#ffffff" align="left"
                                  style="Margin:0;padding-top:20px;padding-right:30px;padding-left:30px;padding-bottom:15px">
                                <p
                                  style="Margin:0;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;letter-spacing:0;color:#666666;font-size:18px">
                                  Resetting your password is easy. Just press the button below and follow the
                                  instructions. We'll have you up and running in no time.</p></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="left" style="padding:0;Margin:0;padding-right:30px;padding-left:30px;padding-bottom:20px">
                    <table width="100%" cellspacing="0" cellpadding="0"
                           style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                        <td valign="top" align="center" style="padding:0;Margin:0;width:540px">
                          <table width="100%" cellspacing="0" cellpadding="0"
                                 style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                            <tr>
                              <td align="center"
                                  style="Margin:0;padding-right:10px;padding-left:10px;padding-top:40px;padding-bottom:40px">
                                <span class="es-button-border"
                                      style="border-style:solid;border-color:#7C72DC;background:#7C72DC;border-width:1px;display:block;border-radius:6px;width:auto"><a
                                  href="${appDeploy}${ROUTES.createNewPassword}/##token##"
                                  class="es-button" target="_blank"
                                  style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:15px 5px 10px;display:block;background:#7C72DC;border-radius:6px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #7C72DC">Reset Password</a></span>
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
        <table class="es-content" cellspacing="0" cellpadding="0" align="center"
               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
          <tr>
            <td align="center" style="padding:0;Margin:0">
              <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                     style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;matgin-bottom:20px;width:600px">
                <tr>
                  <td align="left" style="padding:0;Margin:0">
                    <table width="100%" cellspacing="0" cellpadding="0"
                           style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                        <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                          <table
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#111111"
                            width="100%" cellspacing="0" cellpadding="0" bgcolor="#111111">
                            <tr>
                              <td class="es-m-txt-l" bgcolor="#ffffff" align="center"
                                  style="Margin:0;padding-top:35px;padding-right:30px;padding-left:30px;padding-bottom:30px">
                                <h2
                                  style="Margin:0;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:16px;font-style:normal;font-weight:normal;line-height:19px;color:#6fa8dc">
                                  If you didn't request this message just ignore it.</h2></td>
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
</html>
`
