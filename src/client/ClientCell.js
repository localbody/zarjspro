import PositionedObject from '../common/PositionedObject';
import ClientGameObject from './ClientGameObject';

class ClientCell extends PositionedObject {
  constructor(cfg) {
    super();
    const { cellWidth, cellHeight } = cfg.world;

    Object.assign(
      this,
      {
        cfg,
        objects: [],
        x: cellWidth * cfg.cellCol,
        y: cellWidth * cfg.cellRow,
        width: cellWidth,
        height: cellHeight,
      },
      cfg,
    );

    this.initGameObjects();
  }

  initGameObjects() {
    const { cellCfg } = this;

    this.objects = cellCfg.map( (layer, layerId) => layer.map((objCfg) => new ClientGameObject({
      cell: this,
      objCfg,
      layerId
    })) );


    // this.objects = cellCfg[0].;
  }

  render(time, layerId) {
    const { objects } = this;

    if (objects[layerId]) {
      objects[layerId].forEach((obj) => obj.render(time));
    }

  }

  addGameObject(objToAdd) {

    const { objects } = this;

    if (objToAdd.layerId === undefined) {
      objToAdd.layerId = objects.length;
    }

    if (!objects[objToAdd.layerId]) {
      objects[objToAdd.layerId] = [];
    }

    this.objects.push(objToAdd);
  }

  removeGameObject(objToRemove) {
    // this.objects = this.objects;

    const { objects } = this;

    objects.forEach((layer, layerId) => objects[layerId] = layer.filter((obj) => obj !== objToRemove));

  }

  findObjectsByType(type) {

    let foundObjects = [];

    this.objects.forEach((layer) => foundObjects = [...foundObjects, ...layer].filter((obj) => obj.type === type));

    return foundObjects;
  }
}

export default ClientCell;
