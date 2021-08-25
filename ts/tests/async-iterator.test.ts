function getTimedResolvingPromise(milliseconds: number): Promise<void> {
	
	return new Promise<void>((resolve: (value?: void) => void): void => {
		
		setTimeout(() => resolve(), milliseconds);
		
	});
	
}

function getTimedRejectingPromise(milliseconds: number): Promise<void> {
	
	return new Promise<void>((resolve: (value?: void) => void, reject: (error?: any) => void): void => {
		
		setTimeout(() => reject(), milliseconds);
		
	});
	
}

getTimedResolvingPromise(1000).then(() => console.log("1000 mls"))
getTimedResolvingPromise(250).then(() => console.log("250 mls"))
getTimedResolvingPromise(1500).then(() => console.log("1500 mls"))
