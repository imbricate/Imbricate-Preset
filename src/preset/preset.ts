/**
 * @author WMXPY
 * @namespace Preset
 * @description Preset
 */

import { ImbricatePresetServe } from "./serve";

export class ImbricatePreset {

    public static fromScratch(): ImbricatePreset {

        return new ImbricatePreset();
    }

    private readonly _servePresets: ImbricatePresetServe[];

    private constructor() {

        this._servePresets = [];
    }

    public servePreset(
        preset: ImbricatePresetServe,
    ): this {

        this._servePresets.push(preset);
        return this;
    }
}
