import FullList from '../model/FullList'

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,

}

export default class ListTemplate implements DOMList {

    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate()

    private constructor() {
        this.ul = document.getElementById("listItems")! as HTMLUListElement
    }



    clear(): void {
        // obsolete -my implement
        // // Find the ul element
        // const list = document.getElementById('listItems');
        // if (!list) return;

        // // Remove all child elements from the list
        // while (list.firstChild) {
        //     list.removeChild(list.firstChild);
        // }
        this.ul.innerHTML = ''
    }

    render(fullList: FullList): void {

        this.clear()

        // Create and append the items
        fullList.list.forEach(item => {
            const li = document.createElement('li') as HTMLElement
            li.className = 'item';

            const check = document.createElement('check') as HTMLInputElement
            check.type = 'checkbox'
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)

            check.addEventListener('change',() => {
                item.checked = !item.checked
                fullList.save()
            })

            const label = document.createElement('label') as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            const button = document.createElement('button') as HTMLButtonElement
            button.className = 'button'
            button.textContent = 'X'
            // button.onclick = () => li.remove()  // Remove the item when the button is clicked
            li.append(button)
           
            button.addEventListener('click',() => {
                fullList.removeItem(item.id)
                this.render(fullList)
            })

            this.ul.append(li)
        });

    }
}