import React from 'react';

export default function SkillTag({ skill }) {
    return (
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {skill}
        </span>
    );
}