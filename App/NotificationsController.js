import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

const Controller = {
  init() {
    PushNotification.configure({
      onNotification(notification) {
        console.log( 'NOTIFICATION:', notification );
      }
    });
  },

  schedule(opts) {
    PushNotification.localNotificationSchedule(opts);
  }
}

export default Controller;
