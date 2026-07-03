import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';
import { fileExt } from './file-ext';

/**
 * Returns a commonly used file extension.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * commonFileExt(fakerCore) // 'gif'
 *
 * @since 3.1.0
 */
export function commonFileExt(fakerCore: FakerCore): string {
  return fileExt(fakerCore, arrayElement(fakerCore, commonMimeTypes));
}
