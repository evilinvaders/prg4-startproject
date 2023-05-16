import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import axolotlImage from '../images/axolotl.png'
import sirenImage from '../images/siren.png'

const Resources = {
    Axolotl: new ImageSource(axolotlImage),
    Siren: new ImageSource(sirenImage)
}
const ResourceLoader = new Loader([Resources.Axolotl, Resources.Siren])

export { Resources, ResourceLoader }