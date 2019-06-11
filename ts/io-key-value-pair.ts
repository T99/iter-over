/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:58 PM -- May 26th, 2019.
 *	Website: dashboard.ampelfeedback.com
 */

/**
 * A key-value data pair.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export interface IOKeyValuePair<K = any, V = any> {

	readonly key: K;
	
	readonly value: V;

}