import { io, Socket } from 'socket.io-client';
import axios from 'axios';
import AgoraRTC from 'agora-rtc-sdk-ng';
let socket: Socket;
let publicKey: string;
let client: any;
const appId = '66701574e10e4079b69531faa6c01029';
let rtc = { localAudioTrack: null as any, client: null as any };

const initClient = () => {
  client = AgoraRTC.createClient({ mode: 'live', codec: 'vp8' });
  client.setClientRole('host');
};

const SOCKET_URL = 'http://localhost:3000';

export const initiateSocket = (publickey: string) => {
  if (!client) initClient();
  console.log(client);
  if (!socket && publicKey !== publickey) {
    socket = io(SOCKET_URL, {
      transports: ['websocket'],
    });
    console.log('Connecting to socket');

    if (socket && publickey) {
      socket.emit('login', JSON.stringify({ address: publickey }), (response: string) => {
        console.log(response);
      });
    }
  }
};

export const listenToCall = (callback: Function) => {
  if (!socket) {
    return;
  }

  socket.on('offer', (data) => {
    callback(data);
  });
};

export const listenAcceptCall = (callback: Function) => {
  if (!socket) {
    return;
  }

  socket.on('accept', (data) => {
    callback(data);
  });
};

export const listenLeaveCall = (callback: Function) => {
  if (!socket) {
    return;
  }

  socket.on('leave', (data) => {
    callback(data);
  });
};

export const handleOfferCall = (to: string, from: string) => {
  socket.emit('offer', JSON.stringify({ to: to, from: from }));
};

export const handleLeaveCall = (to: string, from: string) => {
  socket.emit('leave', JSON.stringify({ to: to, from: from }));
};

export const fetchToken = (uid: any, channelName: any, tokenRole: any): Promise<string> => {
  return new Promise(function (resolve) {
    axios
      .post(
        'http://localhost:8082/fetch_rtc_token',
        {
          uid: uid,
          channelName: channelName,
          role: tokenRole,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      )
      .then(function (response) {
        const token = response.data.token;
        resolve(token);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

export const startBasicCall = async (role: any, uid: any, channel: any, to: string, from: string) => {
  let token = await fetchToken(uid, channel, role);

  await client.join(appId, channel, token, uid);
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  await client.publish([rtc.localAudioTrack]);
  console.log('acceptedd');
  socket.emit('accept', JSON.stringify({ channel: channel, from: from, to: to }));

  client.on('user-published', async (user: any, mediaType: any) => {
    await client.subscribe(user, mediaType);
    console.log('subscribe success');

    if (mediaType === 'audio') {
      const remoteAudioTrack = user.audioTrack;
      remoteAudioTrack?.play();
    }
  });
};

export const joinCall = async (role: any, uid: any, channel: any) => {
  let token = await fetchToken(uid, channel, role);

  await client.join(appId, channel, token, uid);
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  await client.publish([rtc.localAudioTrack]);
  var user = await client.remoteUsers[0];
  await client.subscribe(user, 'audio');
  console.log('audio');
  user.audioTrack?.play();
  client.on('user-published', async (user: any, mediaType: any) => {
    await client.subscribe(user, mediaType);
    console.log('subscribe success');

    if (mediaType === 'audio') {
      const remoteAudioTrack = user.audioTrack;
      console.log('audio');
      remoteAudioTrack?.play();
    }
  });
};

export const leaveCall = async () => {
  rtc.localAudioTrack.close();
  client.leave();
};
