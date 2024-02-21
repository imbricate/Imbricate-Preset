/**
 * @author WMXPY
 * @namespace Preset
 * @description Serve
 */

export class ImbricatePresetServe {

    public static fromScratch(): ImbricatePresetServe {

        return new ImbricatePresetServe();
    }

    private readonly _protocol: string;

    private constructor() {

    }
}
