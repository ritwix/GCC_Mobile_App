import React, { useContext, useState } from 'react';

export type User = {
  loggedInGitHub: boolean;
  githubUsername: string;
  qrCodeLink: string;
  contestantId: string;
  githubAvatar: string;
  hasUserSignedUp: boolean;
};

type QuestionScore = {
  contestantId?: string;
  name?: string;
  teamName?: string;
  region?: string;
  questionNumber: number;
  correct: number;
  incorrect: number;
  timedOut: number;
  total: number;
  bonusScore: boolean,
  executionTimeScore: number;
  cycloComplexityScore: number;
  memoryScore: number;
  testCaseScore: number;
}

type QuestionBadgeDetail = {
  region: boolean;
  uni: boolean;
  global: boolean;
}

type QuestionBadges = {
  isFewestAttempts: QuestionBadgeDetail;
  isFewestLinesJava: QuestionBadgeDetail;
  isFewestLinesCSharp: QuestionBadgeDetail;
  isFewestLinesJavaScript: QuestionBadgeDetail;
  isFewestLinesPython: QuestionBadgeDetail;
  isFewestLinesCpp: QuestionBadgeDetail;
  questionNumber: number;
  solved: boolean;
  holeInOne: boolean;
};

export type UserStats = {
  id: string;
  name: string;
  gitUsername: string;
  team: string; // university name
  gitAvatar: string;
  regionalPosition: number;
  globalPosition: number;
  positionWithinTeam: number;
  regionalTeamPosition: number;
  globalTeamPosition: number;
  scores: Array<QuestionScore>;
  total: number;
  region: string, // e.g. "SEA"
  noSubmission: boolean;
  badge: {
      id: string;
      contestantId: string;
      teamId: string;
      score: number;
      engagementScore: number;
      region: string;
      attemptInJava: boolean;
      attemptInCSharp: boolean;
      attemptInJavaScript: boolean;
      attemptInPython: boolean;
      attemptInCpp: boolean;
      question1: QuestionBadges;
      question2: QuestionBadges;
      question3: QuestionBadges;
      question4: QuestionBadges;
      question5: QuestionBadges;
      question6: QuestionBadges;
      question7: QuestionBadges;
      question8: QuestionBadges;
      question9: QuestionBadges;
      completedEasy: boolean;
      completedMedium: boolean;
      completedDifficult: boolean;
      completedAllQuestions: boolean;
      firstSuccessfulSubmissionAt?: string;
      completedAllEasyQuestionsAt?: string;
      completedAllMediumQuestionsAt?: string;
      completedAllDifficultQuestionsAt?: string;
      timeToSolveFirstQuestion: number; // e.g. 9223372036854775807
      solveAllQuestionsAt?: string;
      timeToSolveAllQuestions: number;
      fastestCompletion: QuestionBadgeDetail;
      highestReferrals: QuestionBadgeDetail;
      fastestCompletionFirstQuestion: QuestionBadgeDetail;
      usedMobile: boolean;
      nightOwl: boolean;
      numOfReferrals: number;
      attemptsForQ1: number;
      attemptsForQ2: number;
      attemptsForQ3: number;
      attemptsForQ4: number;
      attemptsForQ5: number;
      attemptsForQ6: number;
      attemptsForQ7: number;
      attemptsForQ8: number;
      attemptsForQ9: number;
      attemptsToCompleteQ1: number;
      timeStampToCompleteQ1?: string;
      attemptsToCompleteQ2: number;
      timeStampToCompleteQ2?: string;
      attemptsToCompleteQ3: number;
      timeStampToCompleteQ3?: string;
      attemptsToCompleteQ4: number;
      timeStampToCompleteQ4?: string;
      attemptsToCompleteQ5: number;
      timeStampToCompleteQ5?: string;
      attemptsToCompleteQ6: number;
      timeStampToCompleteQ6?: string;
      attemptsToCompleteQ7: number;
      timeStampToCompleteQ7?: string;
      attemptsToCompleteQ8: number;
      timeStampToCompleteQ8?: string;
      attemptsToCompleteQ9: number;
      timeStampToCompleteQ9?: string;
      totalEngagementBadgesEarned: number;
      referralBadge: boolean;
      name: string;
  }
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}

const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {
    throw new Error('setUser has not been initialized properly.');
  },
});

export const useUserContext = (): UserContextType => useContext(UserContext);

export const UserContextInit: React.FC = (props) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
