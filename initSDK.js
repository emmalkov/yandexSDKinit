'use strict';
{
    console.log('yandex works')
    var ysdk
    YaGames
        .init()
        .then(ysdk_ => {
            ysdk = ysdk_;
            ysdk.adv.showFullscreenAdv({
                callbacks: {
                    onClose: wasShown => {
                        console.info('First close')
                    }
                }
            });
        })
}
