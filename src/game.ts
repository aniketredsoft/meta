import utils from "../node_modules/decentraland-ecs-utils/index";
import { NFT } from "./nft";
import { data } from "./data";
import { InfoPanel } from "./infoPanel";

// Base scene
const baseScene = new Entity();
baseScene.addComponent(new GLTFShape("models/baseScene.glb"));
baseScene.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
);
engine.addEntity(baseScene);

// UI Elements
const canvas = new UICanvas();
const infoPanel = new InfoPanel(canvas);
const infoPanelForCustomNFT = new InfoPanel(canvas);

infoPanelForCustomNFT.nftImage.sourceWidth = 600;
infoPanelForCustomNFT.nftImage.sourceHeight = 400;

// NFTs
const Nilakash = new NFT(
  new NFTShape("ethereum://" + data[0].address),
  new Transform({
    position: new Vector3(8, 2.5, 8),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(0.0, 1.0, 1.5),
  data[0].id,
  infoPanelForCustomNFT
);

Nilakash.getComponent(Transform).scale.set(
  Nilakash.originalScale.x,
  Nilakash.originalScale.y,
  Nilakash.originalScale.z
);
const cryptoKittiesNFT = new NFT(
  new NFTShape("ethereum://" + data[1].address),
  new Transform({
    position: new Vector3(5, 2.5, 8),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(1.5, 1.5, 0.0),
  data[1].id,
  infoPanel
);
cryptoKittiesNFT
  .getComponent(Transform)
  .scale.set(
    cryptoKittiesNFT.originalScale.x,
    cryptoKittiesNFT.originalScale.y,
    cryptoKittiesNFT.originalScale.z
  );

const knownOrigin = new NFT(
  new NFTShape("ethereum://" + data[2].address),
  new Transform({
    position: new Vector3(11, 2.5, 8),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(1.5, 1.5, 0.0),
  data[2].id,
  infoPanel
);
knownOrigin
  .getComponent(Transform)
  .scale.set(
    knownOrigin.originalScale.x,
    knownOrigin.originalScale.y,
    knownOrigin.originalScale.z
  );
