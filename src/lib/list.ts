import { Pair } from './pair'

export type List<a> = {
    data: Array<a>
    head: () => a
    tail: () => List<a>
    isEmpty: () => Boolean
    size: () => number
    map: <b>(f: (_: a) => b) => List<b>
    concat: (l2: List<a>) => List<a>
    toArray: () => Array<a>
}

export const List = <a>(data: Array<a>): List<a> => ({
    data,
    head: function (): a {
        return this.data[0]
    },
    tail: function (): List<a> {
        return List<a>(this.data.slice(1))
    },
    isEmpty: function (): Boolean {
        return this.data.length === 0
    },
    size: function (): number {
        return this.data.length
    },
    map: function <b>(f: (_: a) => b): List<b> {
        return List<b>(this.data.map(f))
    },
    concat: function (l2: List<a>): List<a> {
        return List<a>(this.data.concat(l2.data))
    },
    toArray: function (): Array<a> {
        return this.data
    },
})

export const zip = <a, b>(l1: List<a>, l2: List<b>): List<Pair<a, b>> =>
    l1.isEmpty() || l2.isEmpty()
        ? List<Pair<a, b>>([])
        : List<Pair<a, b>>([Pair(l1.head(), l2.head())]).concat(zip(l1.tail(), l2.tail()))

export const mergeZip = <a, b>(lst: List<Pair<a, b>>): List<a & b> =>
    List<a & b>(lst.map((x) => ({ ...x.fst, ...x.snd })).toArray())