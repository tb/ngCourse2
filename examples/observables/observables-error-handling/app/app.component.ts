import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	template: `
	  <b>Angular 2 Component using Observables!</b>
	  
	  <h5 style="margin-bottom: 0">VALUES</h5>
	  <div>{{ values.toString() }}</div>
	  
	  <h5 style="margin-bottom: 0">ERRORS</h5>
	  <pre><code>{{anyErrors}}</code></pre>
	  
	  <button style="margin-top: 2rem;" (click)="init()">Init</button>
  `
})

export class AppComponent {
	
	private data:Observable<Array<number>>;
	private values:Array<number> = [];
	private anyErrors:error;

	init() {

		this.data = new Observable(observer => {
			setTimeout(() => {
				observer.error('Hey something bad happened I guess');
			}, 2000);
		});

		let subscription = this.data.subscribe(
			value => this.values.push(value),
			error => this.anyErrors = error
		);
	}
}