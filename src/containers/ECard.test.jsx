/**
 * @jest-environment jsdom
 */
import React from 'react';

describe('email setup page for sending eCard', () => {
  it('if test email was sent return 200', async () => {
    
    const sendMsg = {
      method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'to': `test@test.com`,
            'from': 'GreetingArt@outlook.com',
            'subject': `test has send you a Greeting Art`,
            'html': '<h1>hello there</h1>',
            'mail_settings': {
              'sandbox_mode': {
                'enable': true
              }
            }
    })
  }

    const res = await fetch('https://limitless-everglades-53305.herokuapp.com/send', sendMsg)

    expect(res.status).toEqual(200)

  });
});
