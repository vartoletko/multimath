class Utility {

    static getInputValue(elementId: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)

    if (inputElement.value === ''){
        return 'No name entered'
    }else{
        return inputElement.value
    }

}
}