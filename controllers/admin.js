var {admin}=require('../firebase');


exports.deleteUser=(res,req,next)=>{
    const uid=req.req.params.uid;
    admin.auth().deleteUser(uid).then(()=>{
       next()
        console.log("Shreehari");
    }).catch((error)=>{
        console.log(error); 
    })
}

exports.getUser=(res,req,next)=>{
    // const phoneNumber=req.req.params.phoneNumber;
    // console.log(phoneNumber);
    admin.auth().getUserByPhoneNumber('9512677900').then(()=>{
        next();
        console.log("Shriji");
    }).catch((error)=>{
        console.log(error);
    })
}

exports.sendNotification=async (req,res,next)=>{
  const body=req.body;
  var tokens;
 await admin.firestore().collection('SuperAdmin').doc('RYskh2mptjhaWXC6XrvFgv6nPUg1').get().then(snapshot=>{
   tokens=snapshot.data().token
  })
  console.log("Shreehari");
    const message = {
        notification: {
            title: body.title
          },
          android: {
            notification: {
              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/rechargeapp-913b8.appspot.com/o/logo.png?alt=media&token=4276ab95-261e-4795-800c-19d32c76a8e7',
              color: '#FD8333'
            },
          },
        tokens: tokens
      };
    admin.messaging().sendMulticast(message).then((status)=>{
        next();
        console.log(status);
        console.log('Success');
    }).catch(error=>{
        console.log(error);
    })
}
