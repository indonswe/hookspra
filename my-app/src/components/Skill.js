import React, { useState } from 'react';

const Skill = () => {

    const initialData = [{id: 1, title: "Lua"}]
    const [skills, setSkills] = useState(initialData);
    const skillDefaultData = {id: 0, title: ""}
    const [skill, setSkill] = useState(skillDefaultData);

const ShowData = (props) => {
    return(
    <tbody>
        {
            props.list.map((skill) => (
            <tr key={skill.id}>
                <td>{skill.id}</td>
                <td>{skill.title}</td>
                
            </tr>
                ) )
        }
    </tbody>
    );
};

    return (
        <div>
            <ShowData list={skills}/>
        </div>
    );
};

export default Skill;