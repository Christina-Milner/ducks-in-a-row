import { GiDuck } from "react-icons/gi";
import Link from 'next/link';


type Props = {}

export default function Navbar() {
    return (
        // Making that second one a <p> instead of a div causes hydration errors
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
                <div className='flex items-center justify-center gap-2'> 
                    <h2 className="text-gray-500 text-3xl">Ducks in a Row (Styling is temp)</h2>
                    <GiDuck />
                </div>
                <section className="flex gap-2 items-center">
                    <Link className='text-slate-900/80 text-sm' href="/calendar">Calendar</Link>
                    <Link className='text-slate-900/80 text-sm'href="/stats">Stats</Link>
                    <Link className='text-slate-900/80 text-sm'href="/addHabit">Add a Habit</Link>
                    <Link className='text-slate-900/80 text-sm'href="/changeHabit">Modify Habits</Link>
                </section>
            </div>
        </nav>
    );
}