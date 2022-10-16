const questions = [
    {
        "question": "1. At a party do you: ",
        "options": {
            "A": "A. Interact with many, including strangers",
            "B": "B. Interact with a few, known to you"
        }
    },
    {
        "question": "2. Are you more: ",
        "options": {
            "A": "A. Realistic than speculative",
            "B": "B. Speculative than realistic"
        }
    },
    {
        "question": "3. Is it worse to: ",
        "options": {
            "A": "A. Have your \u201chead in the clouds\u201d",
            "B": "B. Be \u201cin a rut\u201d"
        }
    },
    {
        "question": "4. Are you more impressed by: ",
        "options": {
            "A": "A. Principles",
            "B": "B. Emotions"
        }
    },
    {
        "question": "5. Are more drawn toward the: ",
        "options": {
            "A": "A. Convincing",
            "B": "B. Touching"
        }
    },
    {
        "question": "6. Do you prefer to work: ",
        "options": {
            "A": "A. To deadlines",
            "B": "B. Just \u201cwhenever\u201d"
        }
    },
    {
        "question": "7. Do you tend to choose: ",
        "options": {
            "A": "A. Rather carefully",
            "B": "B. Somewhat impulsively"
        }
    },
    {
        "question": "8. At parties do you: ",
        "options": {
            "A": "A. Stay late, with increasing energy",
            "B": "B. Leave early with decreased energy"
        }
    },
    {
        "question": "9. Are you more attracted to: ",
        "options": {
            "A": "A. Sensible people",
            "B": "B. Imaginative people"
        }
    },
    {
        "question": "10. Are you more interested in: ",
        "options": {
            "A": "A. What is actual",
            "B": "B. What is possible"
        }
    },
    {
        "question": "11. In judging others are you more swayed ",
        "options": {
            "A": "A. Laws than circumstances",
            "B": "B. Circumstances than laws"
        }
    },
    {
        "question": "12. In approaching others is your inclination ",
        "options": {
            "A": "A. Objective",
            "B": "B. Personal"
        }
    },
    {
        "question": "13. Are you more: ",
        "options": {
            "A": "A. Punctual",
            "B": "B. Leisurely"
        }
    },
    {
        "question": "14. Does it bother you more having things: ",
        "options": {
            "A": "A. Incomplete",
            "B": "B. Completed"
        }
    },
    {
        "question": "15. In your social groups do you: ",
        "options": {
            "A": "A. Keep abreast of other\u2019s happenings",
            "B": "B. Get behind on the news"
        }
    },
    {
        "question": "16. In doing ordinary things are you more ",
        "options": {
            "A": "A. Do it the usual way",
            "B": "B. Do it your own way"
        }
    },
    {
        "question": "17. Writers should: ",
        "options": {
            "A": "A. \u201cSay what they mean and mean what they",
            "B": "B. Express things more by use of analogy"
        }
    },
    {
        "question": "18. Which appeals to you more: ",
        "options": {
            "A": "A. Consistency of thought",
            "B": "B. Harmonious human relationships"
        }
    },
    {
        "question": "19. Are you more comfortable in making: ",
        "options": {
            "A": "A. Logical judgments",
            "B": "B. Value judgments"
        }
    },
    {
        "question": "20. Do you want things: ",
        "options": {
            "A": "A. Settled and decided",
            "B": "B. Unsettled and undecided"
        }
    },
    {
        "question": "21. Would you say you are more: ",
        "options": {
            "A": "A. Serious and determined",
            "B": "B. Easy-going"
        }
    },
    {
        "question": "22. In phoning do you: ",
        "options": {
            "A": "A. Rarely question that it will all be said",
            "B": "B. Rehearse what you\u2019ll say"
        }
    },
    {
        "question": "23. Facts: ",
        "options": {
            "A": "A. \u201cSpeak for themselves\u201d",
            "B": "B. Illustrate principles"
        }
    },
    {
        "question": "24. Are visionaries: ",
        "options": {
            "A": "A. somewhat annoying",
            "B": "B. rather fascinating"
        }
    },
    {
        "question": "25. Are you more often: ",
        "options": {
            "A": "A. a cool-headed person",
            "B": "B. a warm-hearted person"
        }
    },
    {
        "question": "26. Is it worse to be: ",
        "options": {
            "A": "A. unjust",
            "B": "B. merciless"
        }
    },
    {
        "question": "27. Should one usually let events occur: ",
        "options": {
            "A": "A. by careful selection and choice",
            "B": "B. randomly and by chance"
        }
    },
    {
        "question": "28. Do you feel better about: ",
        "options": {
            "A": "A. having purchased",
            "B": "B. having the option to buy"
        }
    },
    {
        "question": "29. In company do you: ",
        "options": {
            "A": "A. initiate conversation",
            "B": "B. wait to be approached"
        }
    },
    {
        "question": "30. Common sense is: ",
        "options": {
            "A": "A. rarely questionable",
            "B": "B. frequently questionable"
        }
    },
    {
        "question": "31. Children often do not: ",
        "options": {
            "A": "A. make themselves useful enough",
            "B": "B. exercise their fantasy enough"
        }
    },
    {
        "question": "32. In making decisions do you feel more ",
        "options": {
            "A": "A. standards",
            "B": "B. feelings"
        }
    },
    {
        "question": "33. Are you more: ",
        "options": {
            "A": "A. firm than gentle",
            "B": "B. gentle than firm"
        }
    },
    {
        "question": "34. Which is more admirable: ",
        "options": {
            "A": "A. the ability to organize and be methodical",
            "B": "B. the ability to adapt and make do"
        }
    },
    {
        "question": "35. Do you put more value on: ",
        "options": {
            "A": "A. infinite",
            "B": "B. open-minded"
        }
    },
    {
        "question": "36. Does new and non-routine interaction ",
        "options": {
            "A": "A. stimulate and energize you",
            "B": "B. tax your reserves"
        }
    },
    {
        "question": "37. Are you more frequently: ",
        "options": {
            "A": "A. a practical sort of person",
            "B": "B. a fanciful sort of person"
        }
    },
    {
        "question": "38. Are you more likely to: ",
        "options": {
            "A": "A. see how others are useful",
            "B": "B. see how others see"
        }
    },
    {
        "question": "39. Which is more satisfying: ",
        "options": {
            "A": "A. to discuss an issue thoroughly",
            "B": "B. to arrive at agreement on an issue"
        }
    },
    {
        "question": "40. Which rules you more: ",
        "options": {
            "A": "A. your head",
            "B": "B. your heart"
        }
    },
    {
        "question": "41. Are you more comfortable with work that ",
        "options": {
            "A": "A. contracted",
            "B": "B. done on a casual basis"
        }
    },
    {
        "question": "42. Do you tend to look for: ",
        "options": {
            "A": "A. the orderly",
            "B": "B. whatever turns up"
        }
    },
    {
        "question": "43. Do you prefer: ",
        "options": {
            "A": "A. many friends with brief contact",
            "B": "B. a few friends with more lengthy contact"
        }
    },
    {
        "question": "44. Do you go more by: ",
        "options": {
            "A": "A. facts",
            "B": "B. principles"
        }
    },
    {
        "question": "45. Are you more interested in: ",
        "options": {
            "A": "A. production and distribution",
            "B": "B. design and research"
        }
    },
    {
        "question": "46. Which is more of a compliment: ",
        "options": {
            "A": "A. \u201cThere is a very logical person.\u201d",
            "B": "B. \u201cThere is a very sentimental person.\u201d"
        }
    },
    {
        "question": "47. Do you value in yourself more that you ",
        "options": {
            "A": "A. unwavering",
            "B": "B. devoted"
        }
    },
    {
        "question": "48. Do you more often prefer the ",
        "options": {
            "A": "A. final and unalterable statement",
            "B": "B. tentative and preliminary statement"
        }
    },
    {
        "question": "49. Are you more comfortable: ",
        "options": {
            "A": "A. after a decision",
            "B": "B. before a decision"
        }
    },
    {
        "question": "50. Do you: ",
        "options": {
            "A": "A. speak easily and at length with strangers",
            "B": "B. find little to say to strangers"
        }
    },
    {
        "question": "51. Are you more likely to trust your: ",
        "options": {
            "A": "A. experience",
            "B": "B. hunch"
        }
    },
    {
        "question": "52. Do you feel: ",
        "options": {
            "A": "A. more practical than ingenious",
            "B": "B. more ingenious than practical"
        }
    },
    {
        "question": "53. Which person is more to be complimented ",
        "options": {
            "A": "A. clear reason",
            "B": "B. strong feeling"
        }
    },
    {
        "question": "54. Are you inclined more to be: ",
        "options": {
            "A": "A. fair-minded",
            "B": "B. sympathetic"
        }
    },
    {
        "question": "55. Is it preferable mostly to: ",
        "options": {
            "A": "A. make sure things are arranged",
            "B": "B. just let things happen"
        }
    },
    {
        "question": "56. In relationships should most things be: ",
        "options": {
            "A": "A. re-negotiable",
            "B": "B. random and circumstantial"
        }
    },
    {
        "question": "57. When the phone rings do you: ",
        "options": {
            "A": "A. hasten to get to it first",
            "B": "B. hope someone else will answer"
        }
    },
    {
        "question": "58. Do you prize more in yourself: ",
        "options": {
            "A": "A. a strong sense of reality",
            "B": "B. a vivid imagination"
        }
    },
    {
        "question": "59. Are you drawn more to: ",
        "options": {
            "A": "A. fundamentals",
            "B": "B. overtones"
        }
    },
    {
        "question": "60. Which seems the greater error: ",
        "options": {
            "A": "A. to be too passionate",
            "B": "B. to be too objective"
        }
    },
    {
        "question": "61. Do you see yourself as basically: ",
        "options": {
            "A": "A. hard-headed",
            "B": "B. soft-hearted"
        }
    },
    {
        "question": "62. Which situation appeals to you more: ",
        "options": {
            "A": "A. the structured and scheduled",
            "B": "B. the unstructured and unscheduled"
        }
    },
    {
        "question": "63. Are you a person that is more: ",
        "options": {
            "A": "A. routinized than whimsical",
            "B": "B. whimsical than routinized"
        }
    },
    {
        "question": "64. Are you more inclined to be: ",
        "options": {
            "A": "A. easy to approach",
            "B": "B. somewhat reserved"
        }
    },
    {
        "question": "65. In writings do you prefer: ",
        "options": {
            "A": "A. the more literal",
            "B": "B. the more figurative"
        }
    },
    {
        "question": "66. Is it harder for you to: ",
        "options": {
            "A": "A. identify with others",
            "B": "B. utilize others"
        }
    },
    {
        "question": "67. Which do you wish more for yourself: ",
        "options": {
            "A": "A. clarity of reason",
            "B": "B. strength of compassion"
        }
    },
    {
        "question": "68. Which is the greater fault: ",
        "options": {
            "A": "A. being indiscriminate",
            "B": "B. being critical"
        }
    },
    {
        "question": "69. Do you prefer the: ",
        "options": {
            "A": "A. planned event",
            "B": "B. unplanned event"
        }
    },
    {
        "question": "70. Do you tend to be more: ",
        "options": {
            "A": "A. deliberate than spontaneous",
            "B": "B. spontaneous than deliberate"
        }
    }
]

module.exports = {
    questions: questions
}  