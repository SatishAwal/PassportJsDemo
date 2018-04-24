module.exports={
    'facebookAuth':{
        'clientId':'1753544388071629',
        'clientSecret':'7512f8500464c08d7d15b6bae7bdbb54',
        'callbackURL':'http://localhost:8080/auth/facebook/callback',
        'profileURL':'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'email', 'name']// For requesting permissions from Facebook API
    },
    'twitterAuth': {
        'consumerKey': 'your-consumer-key-here',
        'consumerSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': '116130002387-d8j3319qr06clmeb642jaitq8q6c88m9.apps.googleusercontent.com',
        'clientSecret': 'rzRkChlGSimHfVPaH5ExDs7H',
        'callbackURL': 'http://localhost:8080/auth/google/callback'
    }
}