import files from '@/constants/assets';
import fontConfig from '@/constants/bitmap-fonts';

export default class Loader extends Phaser.Scene {
  /**
   *  Takes care of loading the main game assets.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Loader', pack: {files}});
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init(/* data */) {
    //  Register our custom bitmap font in he game system cache.
    this.cache.bitmapFont.add(
      fontConfig.image,
      Phaser.GameObjects.RetroFont.Parse(this, fontConfig)
    );

    //  We are done here. Launch the game menu.
    this.scene.start('Menu');
  }
}
