"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const image_1 = __importDefault(require("next/image"));
function Home() {
    return (<div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to my Landing Page!</h1>
      <image_1.default src="/cat.jpg" alt="A cute cat" width={500} height={500}/>
    </div>);
}
//# sourceMappingURL=page.js.map