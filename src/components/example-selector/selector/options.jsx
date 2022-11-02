import { 
    UseMemoExample, USE_MEMO_FACTS,
    MemoExample, MEMO_FACTS,
    UseEffectExample, USE_EFFECT_FACTS,
    UseCallbackExample, USE_CALLBACK_FACTS,
    UseEventExample, USE_EVENT_FACTS
} from '../examples';

export const OPTIONS = [
    {
        title: "useEffect",
        component: <UseEffectExample />,
        facts: USE_EFFECT_FACTS
    },
    {
        title: "useMemo",
        component: <UseMemoExample />,
        facts: USE_MEMO_FACTS
    },
    {
        title: "memo",
        component: <MemoExample />,
        facts: MEMO_FACTS
    },
    {
        title: "useCallback",
        component: <UseCallbackExample />,
        facts: USE_CALLBACK_FACTS
    },
    {
        title: "useEvent",
        component: <UseEventExample />,
        facts: USE_EVENT_FACTS
    },
];
