if (!window.W) {
  window.W = {
    setHooks: Function.prototype,
    initializeAsync: () => Promise.resolve(),
    checkPurchase: () => Promise.resolve(true),
    purchase: () => Promise.resolve(),
    fileSystem: {
      upload: (superagent, file, onProgress) => {
        return Promise.resolve({
          url:
            'https://www.weblite.me:3000/file/report44.pdf-@-1275f686-0741-425f-a3d2-fe83ea9a8bf2.pdf',
          // url:
          // 'https://www.weblite.me:3000/file/CA1.pdf-@-6bf35279-2bd6-493e-87cd-a3cfc191cd6e.pdf',
          name: 'سوالات آزمون.pdf',
        })
      },
    },
    wappSystem: {
      runWapp: (...args) => console.log('Run Wapp:', ...args),
      closeX: Function.prototype,
      instantiateWapp: (...args) => {
        console.log('Instantiating Wapp:', ...args)
        return Promise.resolve({ wisId: 'InstantitedWidId' })
      },
    },

    messages: { sendMessageToCurrentChat: () => Promise.resolve() },
    user: { getId: () => 'myUserId' },
    wapp: {
      getInput: () => ({
        // articleId: '130587a4-3f44-4a68-9c41-531b2945a2c8',
      }),
    },
    analytics: (...args) => console.log(...args),
  }
}
