const { FRONTEND_URL, BASE_URL } = process.env;

const sendEmailTemplate = (verificationToken) =>
`<table cellpadding="0" cellspacing="0" width="100%" style="font-family: 'Roboto';">
        <tr>
            <td style="padding: 10px; background-color: lightseagreen;">
                <a href="${FRONTEND_URL}" target="_blank" style="text-decoration: none; font-weight: 600; font-size: 16px; color: #fff;">
                    TASKco
                </a>
            </td>
        </tr>
        <tr style="padding: 20px; text-align: center;">
         <td width="100%" height="300px" style="padding-bottom: 50px; 
         border-bottom-left-radius: 70px;  
         background: #F2F5FC;" valign="top">
            <div style="padding: 10px"><h2>Confirm your email address to get started on TESKco</h2>
            <div style="background-color: lightseagreen; color: #fff; border-radius: 20px; 
            width: 150px; 
            padding-top: 15px;
            padding-bottom: 15px; 
            margin: 0 auto;">
                <a target="_blank" href='${BASE_URL}/api/auth/verify/${verificationToken}' style="font-family: 'Roboto';
                font-weight: 700;
                font-size: 14px;
                display: block;
                text-align: center;
                text-transform: uppercase;
                text-decoration: none;
                color: #FFFFFF;">
                Confirm email</a>
            </div>
            <p>If you didn’t request this email, there’s nothing to worry about — you can safely ignore it.</p>
            <p>Note: This is an automated response, so please do not reply to this email.</p>
            </div>
         </td>
        </tr>
    </table>`;

    module.exports = sendEmailTemplate;