import CommandBase from 'elementor-api/modules/command-base';

export class Select extends CommandBase {
	validateArgs( args ) {
		this.requireContainer( args );
	}

	apply( args ) {
		const { containers = [ args.container ], append = false } = args;

		elementor.selection.add( containers, append );
	}
}

export default Select;
