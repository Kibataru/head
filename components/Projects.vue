<template>
    <section class="projects-section">
        <div class="projects-container">
            <h2 class="projects__title">Реализованные проекты</h2>
            <div class="projects__cards">
                <Project
                    v-for='project in projects'
                    :key='project.title'
                    :title='project.title'
                    :text='project.text'
                    :image_landscape='project.image_landscape'
                    :image_portrait='project.image_portrait'
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import Project from '@/components/Project.vue';
import project1_landscape_1x from '@/assets/images/project/project-1-landscape.jpg';
import project1_landscape_2x from '@/assets/images/project/project-1-landscape@2x.jpg';
import project2_landscape_1x from '@/assets/images/project/project-2-landscape.jpg';
import project2_landscape_2x from '@/assets/images/project/project-2-landscape@2x.jpg';
import project1_portrait_1x from '@/assets/images/project/project-1-portrait.jpg';
import project1_portrait_2x from '@/assets/images/project/project-1-portrait@2x.jpg';
import project2_portrait_1x from '@/assets/images/project/project-2-portrait.jpg';
import project2_portrait_2x from '@/assets/images/project/project-2-portrait@2x.jpg';

const projects = [
    {
        image_landscape:{
            x1: project1_landscape_1x,
            x2: project1_landscape_2x
        },
        image_portrait:{
            x1: project1_portrait_1x,
            x2: project1_portrait_2x
        },
        title: 'Дом в скандинавском стиле',
        text: 'Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей.<br><br><br>Построен по индивидуальному проекту.'
    },
    {
        image_landscape:{
            x1: project2_landscape_1x,
            x2: project2_landscape_2x
        },
        image_portrait:{
            x1: project2_portrait_1x,
            x2: project2_portrait_2x
        },
        title: 'Дом из газобетона',
        text: 'Одноэтажный дом габаритными размерами 15.2 х 9.7м.<br>Приведенная площадь – 127.7 м.кв.<br><br><br>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.'
    }
];
</script>

<style scoped lang="scss">
.projects-section {
    background-color: #F5F7F3;
    padding: 80px 0;

    @media (max-width: 576px) {
        padding: 40px 0;
    }
}

.projects-container {
    max-width: 1200px;
    margin: 0 auto;

    box-sizing: border-box;

    @media (max-width: 992px) {
        padding-left: 20px;
        padding-right: 20px;
    }
}

.projects__title {
    font-family: $font-accent;
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
    margin-bottom: 32px;
    color: #000;

    @media (max-width: 992px) {
        font-size: 32px;
        margin-bottom: 24px;
    }

    @media (max-width: 576px) {
        font-size: 38px;
        text-align: left;
    }
}

.projects__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    
    @media (max-width: 1189px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media (max-width: 576px) {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;

        margin-left: -5%;
        padding-left: 5%;
        padding-right: 5%;
        gap: 10px;

        &::-webkit-scrollbar {
            display: none;
            width: 0; 
            height: 0;
        }
        
    }
}
</style>