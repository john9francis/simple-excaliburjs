"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex = __importStar(require("excalibur"));
const player_1 = __importDefault(require("./actors/player"));
//import playerOptions from './actors/player';
const playerOptions = {
    pos: new ex.Vector(1, 2),
    width: 100,
    height: 100,
    color: ex.Color.Red
};
const game = new ex.Engine({
    width: 800,
    height: 600,
    canvasElementId: '',
    displayMode: ex.DisplayMode.FitScreen,
    pointerScope: ex.Input.PointerScope.Document, // the scope of capturing pointer (mouse/touch) events
});
// call game.start, which is a Promise
game.start().then(function () {
    // ready, set, go!
    const player1 = new player_1.default(playerOptions);
    game.add(player1);
    player1.test();
});
