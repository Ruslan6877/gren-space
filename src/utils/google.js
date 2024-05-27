// import firebase from 'firebase/app';
// import 'firebase/auth';
// const GoogleAuthButton = () => {
//     const handleGoogleSignIn = () => {
//       const provider = new firebase.auth.GoogleAuthProvider();
//       firebase.auth().signInWithPopup(provider)
//         .then((result) => {
//           // Вход успешен. Вы можете выполнить дополнительные действия здесь.
//           console.log(result);
//         })
//         .catch((error) => {
//           // Обработка ошибок при входе через Google
//           console.error(error);
//         });
//     } 
//     return (
//         <button onClick={handleGoogleSignIn}>Войти через Google</button>
//       );
//     }
// export default GoogleAuthButton;