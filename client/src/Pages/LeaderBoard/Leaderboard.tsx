import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/authCalls";
import "./Leaderboard.css";
export const Leaderboard = () => {
  type User = { userName: string; score: number };
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    (async () => {
      const { Users } = await getAllUsers();
      setLeaderboard(Users);
    })();
  }, []);
  const sortedLeaderboard: User[] = [
    ...leaderboard.sort((a: User, b: User) => {
      return b.score - a.score;
    }),
  ];
  return (
    <div className="leaderboard-container">
      <h2>LEADERBOARD</h2>
      <div className="leaderboard-heading">
        <div>USERNAME</div>
        <div>SCORE</div>
      </div>
      {sortedLeaderboard.map(
        ({ userName, score }: { userName: string; score: number }) => {
          return (
            <div className="leaderboard-list" key={userName}>
              <h3>{userName}</h3>
              <h4>{score}</h4>
            </div>
          );
        }
      )}
    </div>
  );
};
