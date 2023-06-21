import BoardList from "@/components/boards/BoardList";

/**
 * Main page
 * Displays the list of available boards, 
 * with their description and split by category
 */
export default function Home() {
    return (
        <div>
          Browse the boards, share your bakes, discuss etc.
            <BoardList />
        </div>
    );
}
