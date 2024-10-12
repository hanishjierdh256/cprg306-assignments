import ItemList
 from './item-list.js';
export default function Page(){
    return(
        <main className = "p-2 bg-neutral-900">
            <h1 className = "text-3xl font-bold text-neutral-100">Shopping List</h1>
            <ItemList />
        </main>
    );
}
