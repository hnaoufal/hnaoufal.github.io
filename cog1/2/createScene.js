/**
 * Populate the scene-graph with nodes,
 * calling methods form the scene-graph and node modules.
 *
 * Texture files have to exist in the "textures" sub-directory.
 *
 * @namespace cog1
 * @module createScene
 */
define(["exports", "scenegraph"],
  function (exports, sceneGraph) {
    "use strict";

    /**
     *  Call methods form the scene-graph (tree) module to create the scene.
     *
     */
    function init() {
      const modelName = 'myModel';
      const cubeNode = sceneGraph.createNodeWithModel(modelName, modelName, {scale: 10});
      cubeNode.rotateTo([3, -1.5, 0]);
    }

    exports.init = init;
  });
