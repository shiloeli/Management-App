import { useRef } from 'react';
import Modal from "./Model";
import Input from "./Input" 

export default function NewProject({onAdd, onCancle}) {
    const modal = useRef();
    const title = useRef(); 
    const description = useRef();
    const dueDate = useRef();


    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = title.current.value;
        const enteredDueDate = title.current.value;

        if (
         enteredTitle.trim() === '' ||
         enteredDescription.trim() === '' ||
         enteredDueDate === ''
        ) {
            modal.current.open();
            return;
         }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Oops .. looks like you forgot to enter a value</p>
        <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex item-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancle}>Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
        <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" texterea />
                <Input type="date" ref={dueDate} label="Due Date"/>
            </div>
        </div>
        </>
    );
}