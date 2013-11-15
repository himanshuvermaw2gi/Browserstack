{
  "type": "interpreter-config",
  "configurations": [
    {
      "settings": [
        {
          "driverOptions": {
            "protocol": "http",
            "host": "hub.browserstack.com",
            "port": "80",
            "path": "/wd/hub"
          },
          "browserOptions":  {
            "browserName": "firefox",
            "acceptSslCerts": true,
            "browserstack.user": "Himanshuverma",
            "browserstack.key": "sUt3pLpo9zsCY9LPZvz6",
            "browserstack.debug": true
          }
        }
      ],
      "scripts": [
        "tests/*"
      ]
    }
  ]
}
