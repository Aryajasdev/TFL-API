import { SplitPipe } from "./split.pipe";

describe('SplitPipeTest', () =>{
    const pipe = new  SplitPipe();
    
    it('split "parveen kumar" to "parveen"', () => expect(pipe.transform('parveen kumar', ' ', 0)).toBe('parveen'));  
    it('split "parveen kumar" to "parveen"', () => expect(pipe.transform('parveen kumar', ' ', 1)).toBe('kumar'));   
})