// import jwt from 'jsonwebtoken';

// const JWT_SECRET = 'tu_clave_secreta';

// export async function handle({ event, resolve }) {
//     const token = event.cookies.get('token');

//     if (token) {
//         try {
//             const decoded = jwt.verify(token, JWT_SECRET);
//             event.locals.user = decoded;
//         } catch (e) {
//             event.locals.user = null;
//         }
//     } else {
//         event.locals.user = null;
//     }

//     return resolve(event);
// }