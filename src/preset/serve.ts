/**
 * @author WMXPY
 * @namespace Preset
 * @description Serve
 */

export class ImbricatePresetServe {

    public static protocol(
        protocol: string,
    ): ImbricatePresetServe {

        return new ImbricatePresetServe(protocol);
    }

    private readonly _protocol: string;

    private constructor(protocol: string) {

        this._protocol = protocol;
    }
}
