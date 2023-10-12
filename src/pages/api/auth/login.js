import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
   if (req.method === 'POST') {
      const { email, password } = req.body;

      try {
         const response = await axios.post(
            `${process.env.API_URL}api/login/`,
            {
               email,
               password,
            },
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         );

         if (response.data.access) {
            res.setHeader('Set-Cookie', [
               cookie.serialize('token', response.data.access, {
                  maxAge: 60,
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== 'development',
                  sameSite: 'Lax',
                  path: '/',
               }),
            ]);

            return res.status(200).json({
               sucess: true,
            });
         } else {
            res.status(response.status).json({
               error: 'Authentication failed',
            });
         }
      } catch (error) {
         console.log(error.response);
         res.status(error.response.status).json({
            error: error.response && error.response.data.error,
         });
      }
   }
};
