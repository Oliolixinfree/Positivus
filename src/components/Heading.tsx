import Wrapper from './Wrapper'
import Tag from './UI/Tag'

export const TagDescription = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex gap-12">
                    <Tag tag="Services" />
                    <p className="w-xl text-lg leading-[23px]">
                        At our digital marketing agency, we offer a range of
                        services to help businesses grow and succeed online.
                        These services include:
                    </p>
                </div>
            </Wrapper>
        </div>
    )
}
