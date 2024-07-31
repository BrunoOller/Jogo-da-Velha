import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Figura({ vetor, posicao, clicado }) {
    const getIcon = () => {
        if (vetor[posicao] !== 0) {
            return vetor[posicao] ? "cross" : "circle";
        }
        return "pencil";
    }

    return (
        <TouchableOpacity onPress={clicado}>
            <Entypo name={getIcon()} size={90} color="#000" />
        </TouchableOpacity>
    )
}