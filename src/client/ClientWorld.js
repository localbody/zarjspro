class ClientWorld {
    constructor(game, engine, levelCfg) {
        Object.assign(this, {
            game,
            engine,
            levelCfg,
            height: levelCfg.map.length,
            width: levelCfg.map[0].length,
        });
    }

    init() {


        this.levelCfg.map.forEach( (itemY, indexY) => {
            itemY.forEach( (itemX, indexX) => {
                this.engine.renderSpriteFrame ({
                    sprite: ['terrain', itemX[0][0]],
                    frame: 0,
                    x: indexX * 48,
                    y: indexY * 48,
                    w: 48,
                    h: 48,
                });
            } )
        });

    }
}

export default ClientWorld;
