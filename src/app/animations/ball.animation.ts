import { animation, animate, style } from '@angular/animations';

export const BallAnimation = animation([
	animate('{{ speed }}', style({ right: '{{ left }}' })),
	animate('{{ speed }}', style({ right: '{{ left }}', top: '{{ bottom }}' })),
	animate('{{ speed }}', style({ right: 0, top: '{{ bottom }}' })),
	animate('{{ speed }}', style({ right: 0, top: 0 }))
]);
