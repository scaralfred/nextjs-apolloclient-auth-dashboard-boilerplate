import Router from 'next/router'

export default (req, res) => {
  localStorage.removeItem('token');
  Router.push('/auth/login')
};

// export default (req, res) => {
//   res.setHeader(
//     'Set-Cookie',
//     'session=; Max-Age=0; SameSite=Strict; HttpOnly; Path=/'
//   );
//   res.status(200).end();
// };