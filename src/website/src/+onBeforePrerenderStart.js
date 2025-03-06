import metaEcModule from '../prebuild/meta-ec.json' assert { type: 'json' };
import metaEuModule from '../prebuild/meta-eu.json' assert { type: 'json' };

export { onBeforePrerenderStart }

const metaEc = metaEcModule.default || metaEcModule;
const metaEu = metaEuModule.default || metaEuModule;

const ecRoutes = Array.isArray(metaEc) ? metaEc.map((page) => page.attributes.url) : [];
const euRoutes = Array.isArray(metaEu) ? metaEu.map((page) => page.attributes.url) : [];
const allRoutes = ['/', ...ecRoutes, ...euRoutes];

console.log('Prerender routes:', allRoutes);
async function onBeforePrerenderStart() {
	return allRoutes;
}