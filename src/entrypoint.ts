import type { Alpine } from 'alpinejs';
import dialog from '@fylgja/alpinejs-dialog';

export default (Alpine: Alpine) => {
	Alpine.plugin(dialog);
};
